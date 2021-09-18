export default function ErrorMessages({ messages }) {
  const arrayOfErrorMessages = messages.split("-");

  const listOfErrorMEssages = arrayOfErrorMessages.map((message) => (
    <li>{"- " + message}</li>
  ));

  return (
    <ul className="bg-red-300 py-2 px-2 text-red-900 text-left rounded-md">
      {listOfErrorMEssages}
    </ul>
  );
}
