import PropTypes from 'prop-types';

class Message{}

MyComponent.propTypes = {
    optionArray: PropTypes.array,
    optionBool: PropTypes.bool,
    optionFunc: PropTypes.func,
    optionNum: PropTypes.number,
    optionObject: PropTypes.object,
    optionString: PropTypes.string,
    optionSymbol: PropTypes.symbol,

    optionNode: PropTypes.node,

    /**
     * 一个react元素
     * */
    optionElement: PropTypes.element,

    /**
     * optionMessage 是Message的实例
     * */
    optionMessage: PropTypes.instanceOf(Message),

    optionEnum: PropTypes.oneOf(['One', 'Two']),

    /**
     * 一个对象可以是多种类型中的一个
     * */
    optionUnion: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Message)
    ]),

    // 一个某种类型的数组
    optionArrayOf:PropTypes.array(PropTypes.number()),

    /**
     * 属性值为某种类型的对象
     * */
    optionObjectOf: PropTypes.objectOf(PropTypes.number),

    /**
     * 一个特定形式的对象
     * */
    optionObjectWithShape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),

    /**
     * 必须要有这个函数requiredFunc
     * */
    requiredFunc: PropTypes.func.isRequired,

    /**
     * 任何数据类型的值
     * */
    requiredAny: PropTypes.any.isRequired,

    // 你也可以声明自定义的验证器。如果验证失败返回 Error 对象。不要使用 `console.warn` 或者 throw ，
    // 因为这不会在 `oneOfType` 类型的验证器中起作用。
    customProp: function(props, propName, componentName) {
        if(!/matchme/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    },


    // 也可以声明`arrayOf`和`objectOf`类型的验证器，如果验证失败需要返回Error对象。
    // 会在数组或者对象的每一个元素上调用验证器。验证器的前两个参数分别是数组或者对象本身，
    // 以及当前元素的键值。
    customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName){
        if (!/matchName/.test(propValue[key])){
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }

    })


}
