export interface TokenTransformOptions {
	pluginOptions: {
		rootFontSize: number;
	};
	toUnit?: string;
	asUnit?: string;
}

export interface Token {
	cssValue(opts?: TokenTransformOptions): string
}
