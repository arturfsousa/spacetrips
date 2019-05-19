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
      {({ data, loading, error, fetchMore }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>ERROR</div>;

        const { launches: result = null } = data;
        const { launches = [] } = result;
        const { hasMore = false, cursor = null } = result;
        return (
          <Fragment>
            {launches.map(launch => (
              <div key={launch.id}>
                {launch.id} - {launch.site}
              </div>
            ))}
            {hasMore && (
              <button
                onClick={() => {
                  fetchMore({
                    variables: {
                      after: cursor
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;

                      return {
                        ...fetchMoreResult,
                        launches: {
                          ...fetchMoreResult.launches,
                          launches: [
                            ...prev.launches.launches,
                            ...fetchMoreResult.launches.launches
                          ]
                        }
                      };
                    }
                  });
                }}
              >
                Load More
              </button>
            )}
          </Fragment>
        );
      }}
    </Query>
  );
}

export default Launches;
