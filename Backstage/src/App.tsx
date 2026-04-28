import Page from "./components/Page";
import bgOne from "./assets/backstagetalks_cover2016_n.png";
import bgTwo from "./assets/backstagetalks_cover2017.png";
import bgThree from "./assets/backstagetalks_cover_issue_3.png";
import bgFour from "./assets/backstagetalks_cover_issue_4.png";
import bgFive from "./assets/backstagetalks_cover_issue_5.png";
import logo from "./assets/logo.png";

const App = () => {
	return (
		<div className="relative">
			<div className="hidden md:fixed md:top-0 md:left-0 w-full md:flex md:justify-between md:p-5">
				<div>
					<img src={logo} alt="logo-image" className="w-[260px] h-auto" />
				</div>
				<p className="font-bold">info@backstagetalks.com</p>
			</div>
			<div className="h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth">
				<Page issueNum={1} bgImage={bgOne} bgColor="bg-custom-red" />
				<Page issueNum={2} bgImage={bgTwo} bgColor="bg-custom-blue" />
				<Page issueNum={3} bgImage={bgThree} bgColor="bg-custom-yellow" />
				<Page issueNum={4} bgImage={bgFour} bgColor="bg-custom-orange" />
				<Page issueNum={5} bgImage={bgFive} bgColor="bg-custom-light-blue" />
			</div>
			<footer className="w-[300px] font-bold fixed left-5 bottom-10">
				<p>
					Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape
					and influence this complex world—to have a chance to make the right ones, we need to talk.
				</p>
			</footer>
		</div>
	);
};

export default App;
