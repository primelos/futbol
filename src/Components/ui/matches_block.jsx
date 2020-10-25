import React from 'react'

const MatchesBlock = ({ match }) => {

    
    return (
        <div className='match_block'>
            <div className="match_date">
                { match.final ? match.date : `Match not played yet: ${match.date}` }
            </div>
            <div className="match_wrapper">
                <div className="match_top">
                    <div className="left">
                        <div className="icon" style={{background:`url(/images/team_icons/${match.localThmb}.png)`}}></div>
                        <div className="team_name">{match_local}</div>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchesBlock
