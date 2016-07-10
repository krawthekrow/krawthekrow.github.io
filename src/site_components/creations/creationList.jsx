const React = require('react');
const listData = require('./creationListData');

module.exports = (props) => {
    return (
        <section className="container" style={{maxWidth: '1000px'}}>
            <h1 className="text-center">Stuff I've Made</h1>
            { listData.map((creation, id) =>
                <div className="row" key={id}>
                    <div className="col-sm-4" style={{paddingTop: '20px'}}>
                        <img src={`img/creations/${creation.image}`} style={{width: '100%'}} />
                    </div>
                    <div className="col-sm-8">
                        <h2>
                            { ('link' in creation) ?
                                <a href={creation.link}>{creation.name}</a> :
                                creation.name
                            }<br/>
                            <small>{creation.subtitle}</small>
                        </h2>
                        <p dangerouslySetInnerHTML={{__html: creation.description}}></p>
                        <p><i>{creation.status}, {creation.productionPeriod}</i></p>
                    </div>
                </div>
            ) }
        </section>
    );
};
