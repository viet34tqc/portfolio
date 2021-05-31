import { useEffect, useState } from "react";

const useWorks = () => {
	const [ works, setWorks ] = useState( {} );

	const getWorks = ( r ) => {
		const works = {
			'WordPress': [],
			'React': [],
		};
		r.keys().forEach( fileName => {
			const module = r( fileName );
			const tag = module.meta.tag;
			if ( !Object.keys( works ).includes( tag ) ) {
				return;
			};
			works[ tag ].push( {
				link: fileName.substr( 1 ).replace( /\/index\.mdx$/, "" ),
				meta: module.meta
			} );
		} );

		setWorks( works );
	};

	useEffect( () => {
		getWorks(
			require.context( "../pages/works", true, /\.mdx$/ )
		);
	}, [] );

	return works;
};

export default useWorks;

