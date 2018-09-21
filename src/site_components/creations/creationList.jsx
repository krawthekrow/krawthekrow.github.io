const React = require('react');
const listData = require('./creationListData');

module.exports = (props) => {
    return (
        <section className="container" style={{
			maxWidth: '600px',
			padding: '0px 50px'
		}}>
            { listData.map((creation, id) =>
				<div className="row" key={id} style={{
				}}>
					<div className="row">
						<div className="col-sm-4" style={{
							paddingTop: '30px'
						}}>
							<img src={`static/img/creations/${creation.image}`} alt={creation.name} style={{width: '100%'}} />
						</div>
						<div className="col-sm-8" style={{
							paddingTop: '30px'
						}}>
							<h2 style={{
							}}>
								{ creation.name }
							</h2>
							<div className="btn-group">
								{ creation.buttons.map((btn, i) =>
									<a href={btn.link} type="button" className={
										`btn btn-lg ${(i == 0) ? 'btn-success' : 'btn-light'}`
									} key={btn.text}>
										{ btn.text }
									</a>) }
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
				</div>
            ) }
        </section>
    );
};
