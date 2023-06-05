//Images
import childrensBooksImg1 from '../images/Calendar.png';
import patternsImg1 from '../images/PlanMyDinnerPicture.png';
import commissionsImg1 from '../images/ReadMe.png';

const allImages = [
    {
        "title": "childrens books",
        "pictures": {image: childrensBooksImg1, id: 0}
    },
    {
        "title": "patterns",
        "pictures": {image: patternsImg1, id: 0}
    },
    {
        "title": "commissions",
        "pictures": {image: commissionsImg1, id: 0}
    },
    {
        "title": "all images",
        "pictures": [{image: childrensBooksImg1, id: 0}, {image: patternsImg1, id: 0}, {image: commissionsImg1, id: 0}]
    }
]

export {allImages}