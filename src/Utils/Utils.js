import toast from "react-hot-toast"

// get array from LS
const getItemFromLocalStorage = () =>{
    const addedItem = localStorage.getItem('added-item')
    if(addedItem){
        return JSON.parse(addedItem)
    }
    return []
}



// add item to LS
const addItemToLocalStorage = (addedItem) =>{
    const previouslyAddedItems = getItemFromLocalStorage()

    const isExist = previouslyAddedItems.find(i=>i.product_id===addedItem.product_id)
    if(isExist) 
       return toast.error("Already Exists to Your Cart!")
    
    previouslyAddedItems.push(addedItem)
    localStorage.setItem('added-item',JSON.stringify(previouslyAddedItems))
    toast.success('Successfully Added!')
}



// remove item from LS
const removeAddedItemFromLocalStorage = (deletedItem) =>{
    const previouslyAddedItems = getItemFromLocalStorage()

    const filteredItems = previouslyAddedItems.filter((f)=>f.product_id !== deletedItem.product_id)

    localStorage.setItem('added-item',JSON.stringify(filteredItems))
    toast.success('Successfully Deleted!')
}



export {addItemToLocalStorage, getItemFromLocalStorage, removeAddedItemFromLocalStorage}