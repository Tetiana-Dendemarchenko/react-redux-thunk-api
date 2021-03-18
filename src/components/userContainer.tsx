import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../redux";

function UserContainer ({userData, fetchUsers}: any) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users list</h2>
            <div>
                {
                    userData && userData.users && userData.users.map((user: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
                        return <p>{user.name}</p>;
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    userData: state.user
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
