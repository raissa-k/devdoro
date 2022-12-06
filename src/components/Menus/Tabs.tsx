import Link from "next/link";
import { withRouter } from "next/router";
import ThemeChanger from "./ThemeChanger";

const Tabs = ({ router }) => {
	const { query: { tab } } = router;

	const isTimerTab = tab === "timer" || tab == null;
	const isTaskTab = tab === "tasks";
	const isSettingsTab = tab === "settings";

	return (
		<>
			<div className="fixed z-30 left-0 right-0 bottom-0 bg-base-100/80 rounded-t-2xl">
				<nav className="flex justify-center py-2 gap-6 sm:gap-4 bg-accent/80 rounded-t-2xl">
					<div role={"tablist"} className="flex justify-center py-2 gap-4 sm:gap-8">
						<Link role={"tab"} href={{ pathname: "/", query: { tab: "timer" } }} as={"/"} className={"flex flex-col justify-center items-center rounded-2xl flex-grow-0 p-2 hover:opacity-60 transition-opacity text-accent-content "+(isTimerTab ? "bg-secondary/10 shadow-md shadow-accent-content/20" : "")}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span className="text-xs">Timer</span>
						</Link>
						<Link href={{ pathname: "/", query: { tab: "tasks" } }} as={"/"} className={"flex flex-col justify-center items-center rounded-2xl flex-grow-0 p-2 hover:opacity-60 transition-opacity text-accent-content "+(isTaskTab ? "bg-secondary/10 shadow-md shadow-accent-content/20" : "")}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
							</svg>
							<span className="text-xs">Tasks</span>
						</Link>
						<Link href={{ pathname: "/", query: { tab: "settings" } }} as={"/"} className={"flex flex-col justify-center items-center rounded-2xl flex-grow-0 p-2 hover:opacity-60 transition-opacity text-accent-content "+(isSettingsTab ? "bg-secondary/10 shadow-md shadow-accent-content/20" : "")}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
							</svg>
							<span className="text-xs">Settings</span>
						</Link>
					</div>
					<ThemeChanger />
				</nav>
			</div>
		</>
	);};

export default withRouter(Tabs);