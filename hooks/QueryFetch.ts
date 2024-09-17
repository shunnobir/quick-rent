/* eslint-disable @typescript-eslint/no-unused-vars */
export type QueryUserFetchFucntion = (
  ...params: unknown[]
) => Promise<unknown[]>;

export type QueryUserFetchFunctionDependency = unknown[];

export type QueryInternalFetchFucntion = () => Promise<void>;

export type QueryRerenderFunction = () => void;

export interface QueryStateType {
  fetching: boolean;
  data?: unknown[];
  error?: string;
  fetchFn?: QueryInternalFetchFucntion;
}

export class QueryFetch {
  private state: QueryStateType;
  private rerender: QueryRerenderFunction;
  private userFetchFn: QueryUserFetchFucntion;
  private userFetchFnDeps: QueryUserFetchFunctionDependency;
  constructor(
    userFetchFn: QueryUserFetchFucntion,
    userFetchFnDependencies: QueryUserFetchFunctionDependency,
    rerender: QueryRerenderFunction,
  ) {
    this.state = {
      fetching: true,
      data: undefined,
      error: undefined,
      fetchFn: undefined,
    };
    this.rerender = rerender;
    this.userFetchFn = userFetchFn;
    this.userFetchFnDeps = userFetchFnDependencies;
  }

  private setState(newState: (prevState: QueryStateType) => QueryStateType) {
    this.state = newState(this.state);
  }

  async fetch() {
    if (this.state.data) {
      return this.state.data;
    }
    this.state.fetchFn = async () => {
      try {
        console.log("fetching...");
        this.setState((prev) => ({ ...prev, fetching: true }));
        const data = await this.userFetchFn(...this.userFetchFnDeps);
        this.setState((prev) => ({ ...prev, data }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState((prev) => ({
          ...prev,
          fetching: false,
          fetchFn: undefined,
        }));
      }
    };
    await this.state.fetchFn();
    this.rerender();
  }

  getState() {
    const { fetchFn: _, ...rest } = this.state;
    return rest;
  }
}
