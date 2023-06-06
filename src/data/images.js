//Images
import childrensBooksImg1 from '../images/Calendar.png';
import patternsImg1 from '../images/PlanMyDinnerPicture.png';
import commissionsImg1 from '../images/ReadMe.png';

const allImages = [
    {
        "title": "childrens books",
        "pictures": [childrensBooksImg1, childrensBooksImg1]
    },
    {
        "title": "patterns",
        "pictures": [patternsImg1]
    },
    {
        "title": "commissions",
        "pictures": [commissionsImg1]
    },
    {
        "title": "all images",
        "pictures": [{image: childrensBooksImg1, id: 0}, {image: patternsImg1, id: 1}, {image: commissionsImg1, id: 2}]
    }
]

export {allImages}