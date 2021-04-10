//call
/*
第一个参数为null或者undefined时，this指向全局对象window
值为原始值的指向该原始值的自动包装对象
如String，Number，Boolean
为了避免函数名与上下文的属性发生冲突，使用Symbol类型作为唯一值
将函数作为传入的上下文属性执行
函数执行完成后删除该属性
返回执行结果
*/

Function.prototype.myCall = function(context,...args){
    context = (context??window)||new Object(context);
    const key = Symbol()
    context[key] =this;
    const result =context[key](...args);
    delete context[key];
    return result;
}


//apply
