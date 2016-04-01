declare namespace GenerateHelp {
	interface IHelpParam {
		commands?: IHelpParamCommand[];
		desc?: string;
		options?: { [key: string]: IHelpParamOption } | string;
		usage?: string;
	}

	interface IHelpParamOption {
		alias?: string;
		aliases?: string[];
		desc?: string;
		name: string;
	}

	interface IHelpParamCommand {
		desc?: string;
		name: string;
	}

	function help(param: IHelpParam): string;
}

export = GenerateHelp.help;
