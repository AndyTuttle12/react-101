var user = {
	avatarUrl: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjdhvCf-ajRAhWC7yYKHdDRCl4QjBwIBA&url=http%3A%2F%2Fwww.avatarys.com%2Fdownloadfullsize%2Fsend%2F2289&psig=AFQjCNEvZl4PXGWMMcjPvn66pvsbPdpK9A&ust=1483635010221863',
	userName: 'Joe Schmo'
};

var badges = ['badge1','badge2','badge3'];

var commentHeading = 'This is the heading';

var today = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(protoDate){
	var day = protoDate.getDate();
	var month = months[protoDate.getMonth()];
	var year = protoDate.getFullYear();
	return(
		<div className="Comment-date">{month} {day}, {year}</div>
	)
}


function UserInfo(props){
	return(
		<div className="UserInfo">
			<Avatar user={user}/>	
	        <div className="UserInfo-name">
	          	{props.user.userName}
	        </div>
	    </div>
	)
}
	
function Avatar(props){
	return(
		<img className="Avatar" src={props.user.avatarUrl} alt={props.user.userName}/>
	)
}

function CommentBody(props){
	return(
		<div className="Comment-body">
    		<h1>{props.commentHeading}</h1>
    		<div className="Comment-text">{props.text}</div>
    		<div className="Comment-date">{formatDate(today)}</div>
  		</div>
	)
}

var Badge = React.createClass({

	render: function(){
		return(
			<div className="UserBadges">
        		<div className="badge">{badges}</div>
      		</div>
		)
	}
})

function Comment(props) {
	return (
    	<div className="Comment">
      		<UserInfo user={user}/>
      		<CommentBody commentHeading={commentHeading} text="TEXT" protoDate={today}/>
      		<Badge badge={badges}/>
    	</div>
  	);
}

ReactDOM.render(
	<Comment userBadge={badges} text="TEXT WURDS" protoDate={today} user={user} commentHeading={commentHeading}/>,
	document.getElementById('container')
	)