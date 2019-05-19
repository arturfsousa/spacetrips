import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { LAUNCH_TILE_DATA } from './Launches';

const GET_MY_TRIPS = gql`
  query GetMyTrips {
    me {
      id
      email
      trips {
        ...LaunchTile
      }
    }
  }
  ${LAUNCH_TILE_DATA}
`;

function Profile() {
  return (
    <Query query={GET_MY_TRIPS} fetchPolicy="network-only">
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>ERROR: {error.message}</div>;

        return (
          <Fragment>
            {data.me && data.me.trips.length ? (
              data.me.trips.map(launch => (
                <div key={launch.id}>
                  {launch.id} - {launch.mission.name}
                </div>
              ))
            ) : (
              <p>You haven't booked any trips</p>
            )}
          </Fragment>
        );
      }}
    </Query>
  );
}

export default Profile;
