import { imagesArray, searchInput } from '../../universal/selectors';

const searchingFunctionality = () : void => {
    searchInput.addEventListener('keyup', searchImages);
}

function searchImages() : void {
    const searchValue : string = this.value.toLowerCase();

    imagesArray.forEach(({ name, container }) => {
        container.style.display = name.toLowerCase().indexOf(searchValue) != -1 ? 'inline' : 'none';
    });
}

export default searchingFunctionality;