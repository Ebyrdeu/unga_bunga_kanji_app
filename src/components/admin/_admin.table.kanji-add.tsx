import {Group, NumberInput, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";
import {trpc} from "@/src/utils";
import type {PropsWithChildren} from "react";
import type {NextPage} from "next";

const AdminTableKanjiAdd: NextPage<PropsWithChildren> = ({children}) => {

	const {mutate: kanji_add} = trpc.kanji_add.useMutation();

	const form = useForm({
		initialValues: {
			kanji: "",
			kanji_level: 1,
			kanji_meanings: "",
			kun_readings: "",
			on_readings: "",
		},

	});

	const onSubmit = async (values: any) => {
		await kanji_add({
			...values,
			kanji_meanings: values.kanji_meanings.split(", "),
			kun_readings: values.kun_readings.split(", "),
			on_readings: values.on_readings.split(", "),
		});
		return form.reset();
	};

	return (
			<form onSubmit={form.onSubmit((values) => onSubmit(values))}>
				{children}
				<Group grow>
					<TextInput
							withAsterisk
							placeholder="漢字"
							{...form.getInputProps("kanji")}
					/>
					<NumberInput
							min={1}
							max={5}
							defaultValue={1}
							withAsterisk
							placeholder="Kanji Level"
							{...form.getInputProps("kanji_level")}
					/>
					<TextInput
							withAsterisk
							placeholder="意味"
							{...form.getInputProps("kanji_meanings")}
					/>
					<TextInput
							placeholder="訓読み"
							{...form.getInputProps("kun_readings")}
					/>
					<TextInput
							placeholder="音読み"
							{...form.getInputProps("on_readings")}
					/>

				</Group>
			</form>
	);
};

export default AdminTableKanjiAdd;