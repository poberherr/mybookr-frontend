import { graphql, useFragment } from "@/gql";

import { getSSRClient } from "@/app/helpers/urql";
import { encodeGlobalId } from "@/app/helpers/global-ids";
import { OperatorItem } from "../fragments/operator-fragments";
import { OperatorItemFragment } from "@/gql/graphql";



const OperatorQuery = graphql(`
  query OperatorQuery($experienceId: ID!) {
    operator(id: $experienceId) {
      ...OperatorItem
    }
  }
`);

export async function loadOperator(): Promise<OperatorItemFragment | undefined> {
  if (!process.env.MYBOOKR_OPERATOR_ID) {
    return undefined;
  }

  const result = await getSSRClient().query(OperatorQuery, {
    experienceId: encodeGlobalId("Operator", process.env.MYBOOKR_OPERATOR_ID),
  });

  const operator = useFragment(OperatorItem, result.data?.operator);
  if (!operator) {
    throw new Error(
      `Unable to locate operator with id ${
        process.env.MYBOOKR_OPERATOR_ID
      } global:${encodeGlobalId("Operator", process.env.MYBOOKR_OPERATOR_ID)}`,
    );
  }
  return operator
}

export const revalidate = 60 * 60 * 4;
