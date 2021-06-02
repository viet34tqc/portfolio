import Intro from '../components/Intro';
import Layout from '../components/Layout';
import WorkList from '../components/WorkList';

export default function Home() {
	return (
		<Layout
			title="VietNguyen | Portfolio"
			description="Portfolio of VietNguyen, a web deverloper"
		>
			<h1 hidden>Hompage</h1>
			<Intro />
			<WorkList />
		</Layout>
	);
}
