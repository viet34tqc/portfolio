import Layout from './Layout';

export default function Single({ children, meta }) {
	return (
		<Layout title={meta.title} description={meta.description}>
			<article className="single container">
				<div className="single__inner">
					<div className="single__content">
						<h1 className="single__title" style={{ marginBottom: '12px' }}>
							{meta.title}
						</h1>
						<div className="single__links" style={{ marginBottom: '24px' }}>
							{meta.github && <a href={meta.github}>Github</a>}
							{meta.demo && <a href={meta.demo}>Demo</a>}
						</div>
						{children}
					</div>
					<aside className="single__sidebar">
						<div className="single__meta">
							<h4 className="single__meta__heading">Position</h4>
							{meta.position}
						</div>
						<div className="single__meta">
							<h4 className="single__meta__heading">Tech</h4>
							{meta.tech}
						</div>
					</aside>
				</div>
			</article>
		</Layout>
	);
}
