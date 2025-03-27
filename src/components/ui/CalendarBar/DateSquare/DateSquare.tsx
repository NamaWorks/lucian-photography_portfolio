import { oswald } from "@/utils/fonts/fonts";

const DateSquare = ({ data }: { data: Date }) => {
  const stringDate = data.toDateString();

  const dateNumber = stringDate.split(" ")[2];
  const dateMonth = stringDate.split(" ")[1];

  return (
    <>
      <button className="min-w-[10svw]">
        <div className="flex flex-col items-center w-full justify-center cursor-pointer">
          <p className={`${oswald.className} font-medium`}>{dateNumber}</p>
          <p className={`${oswald.className} font-thin text-[14px]/1.25 uppercase`}>
            {dateMonth}
          </p>
        </div>
      </button>
    </>
  );
};

export default DateSquare;
