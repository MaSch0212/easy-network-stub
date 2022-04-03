import { ParameterType } from '../../models/parameter-type';
import { RouteParam } from '../../models/route-param';

export const buildRouteParamRegex = (
  isOptionalParameter: boolean,
  knownParameter: ParameterType | undefined,
  isArray: boolean,
  prefix: string,
  params: RouteParam[],
  paramName: string,
  paramValueType: string
): string => {
  if (isOptionalParameter) {
    throw new Error(`Optional parameters are not supported for route parameters.`);
  }
  if (isArray) {
    throw new Error(`Array parameters are not supported for route parameters.`);
  }
  params.push({ name: paramName, type: paramValueType });
  if (knownParameter) {
    return `${prefix}${knownParameter.matcher}`;
  } else {
    return '(\\w+)';
  }
};
