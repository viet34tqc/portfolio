import React from 'react';

const TabItem = (props) => <div {...props} />;

const Tabs = ({ defaultTab = '', children }) => {
	const [activeTab, setActiveTab] = React.useState(defaultTab);
	const changeTab = (activeTab) => {
		setActiveTab(activeTab);
	};
	const items = children.filter((item) => item.type.name === 'TabItem');

	return (
		<div className="tabs-wrapper">
			<div className="tabs-nav">
				{items.map(({ props: { index, label } }) => (
					<button
						key={index}
						onClick={() => changeTab(index)}
						className={`tabs-nav__link ${
							activeTab === index ? 'tabs-nav__link--active' : ''
						}`}
					>
						{label}
					</button>
				))}
			</div>
			<div className="tabs-panels">
				{items.map(({ props }) => (
					<div
						{...props}
						className={`tabs-panels__panel ${
							activeTab 	 === props.index ? 'tabs-panels__panel--active' : ''
						}`}
						key={props.index}
					/>
				))}
			</div>
		</div>
	);
};

export { Tabs, TabItem };
