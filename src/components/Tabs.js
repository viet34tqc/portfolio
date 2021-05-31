import React from 'react';

const TabItem = props => <div { ...props } />;

const Tabs = ( { defaultIndex = '', children } ) => {
	const [ bindIndex, setBindIndex ] = React.useState( defaultIndex );
	const changeTab = newIndex => {
		setBindIndex( newIndex );
	};
	const items = children.filter( item => item.type.name === 'TabItem' );

	return (
		<div className="tabs-wrapper">
			<div className="tabs-nav">
				{ items.map( ( { props: { index, label } } ) => (
					<button
						key={ index }
						onClick={ () => changeTab( index ) }
						className={ `tabs-nav__link ${ bindIndex === index ? 'tabs-nav__link--active' : '' }` }
					>
						{ label }
					</button>
				) ) }
			</div>
			<div className="tabs-panels">
				{ items.map( ( { props } ) => (
					<div
						{ ...props }
						className={ `tabs-panels__panel ${ bindIndex === props.index ? 'tabs-panels__panel--active' : ''
							}` }
						key={ props.index }
					/>
				) ) }
			</div>
		</div>
	);
};

export { Tabs, TabItem };

