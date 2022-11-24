
 //category list
  export const categoryList = (categories , options=[])=>{
    categories && categories.forEach(category => {
        options.push({id:category._id ,name:category.name});
        if(category.children.length > 0){
            categoryList(category.children , options)
        }
    }) ;
    return options;
};

// get all category
export const renderCategory = (categories)=>{
    let allCategories = [];
    categories && categories.forEach(category => {
        allCategories.push(
            <li key={category._id}>
                {
                    category.parentId ? 
                    <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
                        {category.name}
                    </a>
                    :
                    <span> {category.name} </span>
                }
                {
                    category.children.length >0 ? (
                        <ul> {renderCategory(category.children)} </ul>
                    ) : null
                }
            </li>
        );
    });
    return allCategories;
};

// genarate url picture
export const genratePictureUrl= (fileName)=>{
   return `http://localhost:5000/public/${fileName}`;
};

//get search params
export const getParams = (search)=>{
    const params = search.split("?")[1];
    const spiltParams = params.split("&");
    let objParams = {};
    spiltParams.forEach(param=>{
        const key = param.split("=");
        objParams[[key[0]]] = key[1];
    });
    return objParams;
};
// get product by id
export const getProductById = (arr,id)=>{
    const product = arr.find(item=>item._id === id);
    return product;
} ;
//get total amount in cart

//return array of in item price * quantity
export const countSubtotal = (cart, filteredCards) => {
    const subtotalArr = cart && cart.map(({ productId, quantity }) => {
        const currentCard = filteredCards && filteredCards.find(({ _id }) => _id === productId);
        return currentCard && quantity * currentCard.price;
    })
    
    const subTotal = subtotalArr.reduce((sum, value) => {
        return sum + value
    }, 0);
    return subTotal;
};
