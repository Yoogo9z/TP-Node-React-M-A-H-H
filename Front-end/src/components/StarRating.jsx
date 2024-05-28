// // components/StarRating.jsx
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// const StarRating = ({ rating }) => {
// const fullStars = Math.floor(rating / 2);
// const halfStar = rating % 2 >= 1 ? 1 : 0;
// const emptyStars = 5 - fullStars - halfStar;

// return (
//     <div>
//         {[...Array(fullStars)].map((, index) => (
//         <FontAwesomeIcon key={full-${index}} icon={faStar} color="gold" />
//         ))}
//     {halfStar === 1 && <FontAwesomeIcon icon={faStar} color="gold" />}
//     {[...Array(emptyStars)].map((, index) => (
//         <FontAwesomeIcon key={empty-${index}} icon={faStar} color="gray" />
//     ))}
//     </div>
// );
// };

// export default StarRating;