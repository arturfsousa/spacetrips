import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        site
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

function Launches() {
  return (
    <Query query={GET_LAUNCHES}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>ERROR</div>;

        const { launches } = data;
        return (
          <Fragment>
            {launches &&
              launches.launches &&
              launches.launches.map(launch => (
                <div key={launch.id}>{launch.site}</div>
              ))}
          </Fragment>
        );
      }}
    </Query>
  );
}

export default Launches;
