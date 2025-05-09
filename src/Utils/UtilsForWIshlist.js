import toast from "react-hot-toast"

// get array from LS
const getWISHEDItemFromLocalStorage = () =>{
    const wishedItem = localStorage.getItem('wished-item')
    if(wishedItem){
        return JSON.parse(wishedItem)
    }
    return []
}



// add item to LS
const addWISHEDItemToLocalStorage = (wishedItem) =>{
    const previouslyAddedItems = getWISHEDItemFromLocalStorage()

    const isExist = previouslyAddedItems.find(i=>i.product_id===wishedItem.product_id)
    if(isExist) 
       return toast.error("Already Exists In Your Wishlist!")
    
    previouslyAddedItems.push(wishedItem)
    localStorage.setItem('wished-item',JSON.stringify(previouslyAddedItems))
    toast.success('Successfully Added To Your Wishlist!')
}



// remove item from LS
const removeWISHEDItemFromLocalStorage = (deletedItem) =>{
    const previouslyAddedItems = getWISHEDItemFromLocalStorage()

    const filteredItems = previouslyAddedItems.filter((f)=>f.product_id !== deletedItem.product_id)

    localStorage.setItem('wished-item',JSON.stringify(filteredItems))
    toast.success('Successfully Deleted!')
}



export {addWISHEDItemToLocalStorage, getWISHEDItemFromLocalStorage,removeWISHEDItemFromLocalStorage}