import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const responce = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await responce.json(); 
}

const getAllCategories = async() => {
    const responce = await fetch(API_URL  + 'categories.php');
    //console.log('делаю запрос');
    //console.log('responce', responce);
    //let qwerty = await responce.json();
    //console.log(qwerty);
    return await responce.json();
    // fetch(API_URL  + 'categories.php').then(async response => {
    //     try {
    //      const data = await response.text()
    //      console.log('response data?', data)
    //    } catch(error) {
    //      console.log('Error happened here!')
    //      console.error(error)
    //    }
    //   })
    
}

// const getAllCategories = async () => {
//     await fetch(API_URL  + 'categories.php')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//             return data
//         });
// }

const getFilteredCategory = async (catName) => {
    const responce = await fetch(API_URL + 'filter.php?c=' + catName);
    return await responce.json(); 
}

// getAllCategories()
    // setCatalog(data.categories)

export { getMealById, getAllCategories, getFilteredCategory } 