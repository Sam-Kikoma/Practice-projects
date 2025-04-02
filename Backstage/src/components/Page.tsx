interface PageProps {
	issueNum: number;
	bgImage: string;
	bgColor: string;
}

const Page = ({ issueNum, bgImage, bgColor }: PageProps) => {
	return (
		<div className={`max-w-full h-screen p-5 overflow-hidden font-primary ${bgColor}`}>
			<div className="flex justify-center items-center h-[85%] flex-col">
				<img src={bgImage} alt="Magazine image" className="w-[420px]" />
				<p className="text-center font-bold">Issue {issueNum} is sold out.</p>
				<p className="text-center">
					If you are lucky, you may get the last pieces in <span className="text-white">selected stores</span>.
				</p>
			</div>
		</div>
	);
};

export default Page;
