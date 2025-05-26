const UserCard = (props) => {
  return (
    <div class="bg-white shadow-md rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 mb-4">
      <h2 class="text-xl font-semibold text-gray-800">{props.name}</h2>
      <p class="text-gray-600">{props.email}</p>
    </div>
  );
};

export default UserCard;
