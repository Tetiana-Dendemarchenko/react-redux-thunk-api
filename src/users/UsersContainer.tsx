import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../store";
import Users from "./Users";

function UsersContainer({userData, fetchUsers}: any) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            {userData.loading && <h2>Loading</h2>}
            {userData.error && <h2>{userData.error}</h2>}
            {(!userData.loading && !userData.error) && <Users userData={userData}/>}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.user
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
