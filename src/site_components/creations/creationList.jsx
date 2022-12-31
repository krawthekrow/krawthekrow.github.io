const React = require('react');
const listData = require('./creationListData');

const highlightCreations = [
	'pi-connect',
	'contourer',
];

module.exports = (props) => {
	return <section className="container" style={{
		maxWidth: '600px',
		padding: '0px 50px'
	}}>
		{ highlightCreations.map((id) => {
			const creation = listData[id];
			return <div className="row" key={id} style={{
			}}>
				<div className="row mt-4">
					<div className="col-sm-4" style={{
					}}>
						<img src={`static/img/creations/${creation.image}`} alt={creation.name} style={{width: '100%'}} />
					</div>
					<div className="col-sm-8 d-flex align-items-center" style={{
					}}>
						<div>
							<h3>
								{ creation.name }
							</h3>
							<div className="btn-group">
								{ creation.buttons.map((btn, i) =>
									<a href={btn.link} role="button" className={
										`btn ${(i == 0) ? 'btn-success' : 'btn-light'}`
									} key={btn.text}>
										{ btn.text }
									</a>) }
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col" style={{
						marginTop: '20px'
					}}>
						<p dangerouslySetInnerHTML={{__html: creation.description}}></p>
					</div>
				</div>
			</div>;
		}) }
	</section>;
};
