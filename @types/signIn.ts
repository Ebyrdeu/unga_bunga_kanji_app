interface SignInTypes<T = string> {
	discord: {
		readonly id: T,
	};
	github: {
		readonly id: T,
	};
}

export type SignInTypesProps = Record<any, SignInTypes>