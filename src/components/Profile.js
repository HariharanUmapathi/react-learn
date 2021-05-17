import './Profile.css';
function Profile(args) {
    if (args.args instanceof Array) {
        return (<Profiles args={args.args} />);
    }
    else {
        return (
            <div className='Profile card'>
                <div className="card-header clearfix">
                    <span className='float-left'>#id {args.id}</span>
                    <span className='float-right'>FSE CLASSROOM</span>
                </div>
                <div className='card-body'>
                    <div className='row flex'>
                    <div className='col-lg-4 col-sm-6 col-md-6 float-left justify-center'>
                    <img className="img-responsive mx-auto d-block" src={args.profile} />
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 float-right'>
                        <p>Author Name</p>
                        <span className='name'>{args.name}</span>
                        <p>Age          :<span>{args.age}</span></p>
                        <p>Projects Done:<span>{args.projects}</span></p>
                    </div>
                    </div>
                    
                </div>
                <div className='card-footer'>
                    <p>Followers {args.follows}</p>
                    <p>Following {args.following}</p>
                </div>
            </div>
        );
    }


}

function Profiles(args) {
    var profiles = args.args.map((profile) => { return Profile(profile) });
    console.log(profiles);
    return (<div className='Profiles'>{profiles}</div>);
}
export default Profile;