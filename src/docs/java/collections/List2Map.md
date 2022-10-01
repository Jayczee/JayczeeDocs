---
title: List转Map
icon: workingDirectory
category:
- Java笔记
tag:
- Java - Collections
---

List转Map平常能遇到很多，一般都是用stream流将List中的某个字段作为key进行转换，但是平常碰到的需要转换的情况大多是这种：
`当使用List中对象的某个字段作为key转换Map时，其value不一定唯一，也就是会转换成Map< Object , List<Object> >的形式`。

例如以下List：
```java
    List<User> userList=new ArrayList<>();
    for(int i=0;i<6;i++){
        User user=new User(String.valueOf(i),i/2,true);
        userList.add(user);
    }
```
其中User为:
```java
    @Data
    @AllArgsConstructor
    class User{
        String name;
        int age;
        boolean sex;
    }
```

由于业务需求需要将User中的age作为Map的key提取出map，很容易看出6个User对象的age分别为`0,0,1,1,2,2`。
每个不重复的Map的Key`0,1,2`分别对应两个对象。

直接写上当时立刻想到的处理方式：

```java
    Map<Integer, List<User>> userMap = new HashMap<>();
    userList.forEach(user -> {
        List<User> users = userMap.computeIfAbsent(user.getAge(), age -> new ArrayList<>());
        users.add(user);
        userMap.put(user.getAge(), users);
    });
```
通过forEach循环遍历一遍，塞进了map中对应的list。写的时候觉得及其不优雅，但确实一时半会想不到其他的方法。潜意识中一直觉得可以用stream流来尝试转换。

后面回到家复习了一会儿，果不其然，可以使用如下方式解决：
```java
Map<Integer, List<User>> userMap = userList
                .stream()
                .collect(
                        Collectors.toMap
                                (User::getAge,
                                        user -> {
                                            List<User> list=new ArrayList<>();
                                            list.add(user);
                                            return list;
                                        },
                                        (u1, u2) -> {
                                            u1.addAll(u2);
                                            return u1;
                                        }
                                )
                );
```
其中Collectors.toMap源码如下：
```java
    Collector<T, ?, Map<K,U>> toMap(Function<? super T, ? extends K> keyMapper,
                                    Function<? super T, ? extends U> valueMapper,
                                    BinaryOperator<U> mergeFunction) {
        return toMap(keyMapper, valueMapper, mergeFunction, HashMap::new);
    }
```
再进入toMap方法看看：
```java
    Collector<T, ?, M> toMap(Function<? super T, ? extends K> keyMapper,
                             Function<? super T, ? extends U> valueMapper,
                             BinaryOperator<U> mergeFunction,
                             Supplier<M> mapFactory) {
        BiConsumer<M, T> accumulator
                = (map, element) -> map.merge(keyMapper.apply(element),
                                              valueMapper.apply(element), mergeFunction);
        return new CollectorImpl<>(mapFactory, accumulator, mapMerger(mergeFunction), CH_ID);
    }
```
Collectors.toMap()方法的三个参数：`keyMapper`，`valueMapper`，`mergeFunction`。其中keyMapper和valueMapper不用多说，分别对应为产生Map的key和value的映射函数。


而`mergeFunction`的官方注释为：`a merge function, used to resolve collisions between values associated with the same key, as supplied to Map.merge(Object, Object, BiFunction)`。

简单来说，其即为`当key冲突时所调用的合并方法,使key冲突时所取value的实际值为你提供的方法的返回值`。

结合实际例子，我们在上面提取userMap的例子中，第二个参数
```java
user -> {
List<User> list=new ArrayList<>();
list.add(user);
return list;
}
```
意为对于原来userList中的每一个User对象，
我们都把它转换为一个只包含一个元素的List。当出现拥有相同的age的user时，我们调用自己定义的`mergeFunction`，把包含第二个user的list加到原来第一个user的list上去。

最后运行结果如下(为了验证更充分 最后把测试用例的数量调整到10)：  

    {  

    0=[CommonTest.User(name=0, age=0, sex=true), CommonTest.User(name=1, age=0, sex=true)],

    1=[CommonTest.User(name=2, age=1, sex=true), CommonTest.User(name=3, age=1, sex=true)],  

    2=[CommonTest.User(name=4, age=2, sex=true), CommonTest.User(name=5, age=2, sex=true)],   

    3=[CommonTest.User(name=6, age=3, sex=true), CommonTest.User(name=7, age=3, sex=true)],   

    4=[CommonTest.User(name=8, age=4, sex=true), CommonTest.User(name=9, age=4, sex=true)]  
    }  

最后提供mergeFunction中的merge方法源代码供参考：
```java
    default V merge(K key, V value,
            BiFunction<? super V, ? super V, ? extends V> remappingFunction) {
        Objects.requireNonNull(remappingFunction);
        Objects.requireNonNull(value);
        V oldValue = get(key);
        V newValue = (oldValue == null) ? value :
                   remappingFunction.apply(oldValue, value);
        if (newValue == null) {
            remove(key);
        } else {
            put(key, newValue);
        }
        return newValue;
    }
```