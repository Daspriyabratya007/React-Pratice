import UserIcon from '../Assets/UserIcon.jpg';
const UserCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-amber-600 shadow-md rounded-lg w-60 h-96'>
      <h1 className=" text-red-700">{props.name}</h1>
      <img className="rounded-full h-32" src={UserIcon} alt="User Image" />
      <p>
       {props.description}
      </p>
    </div>
  );
};

export default UserCard;
