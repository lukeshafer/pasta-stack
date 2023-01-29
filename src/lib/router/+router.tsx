import { Route, Router, Routes, A } from "@solidjs/router";
import { For, type JSX } from "solid-js";

// eslint-disable-next-line
const routes = import.meta.glob("./_routes/*.tsx", { eager: true }) as Record<
	string,
	{ default: () => JSX.Element }
>;
const routeArray = Object.entries(routes).map(([path, file]) => {
	const name = path.replace("./_routes/", "").replace(".tsx", "");
	const component = file?.default as () => JSX.Element;
	return { name, component };
});

interface Props {
	ssrRoute: string;
	base: string;
}

export default function AppRouter(props: Props) {
	return (
		<Router base={props.base} url={props.ssrRoute}>
			<main>
				<nav>
					<For each={routeArray}>
						{(route) => <A href={`/${route.name}`}>{route.name}</A>}
					</For>
				</nav>
				<Routes>
					<For each={routeArray}>
						{(route) => <Route path={route.name} component={route.component} />}
					</For>
				</Routes>
			</main>
		</Router>
	);
}
