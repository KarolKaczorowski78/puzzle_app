import { categoriesButtons, imagesArray } from '../../universal/selectors';

const choosingCategoryFunctionality = () : void => {
    categoriesButtons.forEach(btn => btn.addEventListener('click', chooseCategory));
}

function chooseCategory() : void {
    const chosenCategory : string = this.textContent.toLowerCase().slice(1).trim();
    console.log('choosing category');
    showChosenCategoryImages(chosenCategory);
}

const showChosenCategoryImages = (chosenCategory: string) : void => {
    imagesArray.forEach(({ category, container }) => {
        container.style.display = category === chosenCategory ? 'inline-block' : 'none';
    });

}

export default choosingCategoryFunctionality;