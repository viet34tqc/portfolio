import Intro from '../components/Intro';
import Layout from '../components/Layout';
import WorkList from '../components/WorkList';

export default function Home() {
	return (
		<Layout
			title="VietNguyen | Portfolio"
			description="Portfolio of VietNguyen, a web deverloper"
		>
			<Intro />
			<WorkList />
		</Layout>
	);
}
