import {useForm} from "@mantine/form";
import {api} from "@utils/api";
import {Group, NumberInput, TextInput} from "@mantine/core";
import {type NextPage} from "next";
import {type PropsWithChildren} from "react";

export const KanjiTableForm: NextPage<PropsWithChildren> = ({children}) => {
  const {mutate: kanji_add} = api.admin.addKanji.useMutation();

  const form = useForm({
    initialValues: {
      kanji: "",
      level: 1,
      meanings: "",
      kun_readings: "",
      on_readings: "",
    },

  });

  const onSubmit = async (values: any) => {
    await kanji_add({
      ...values,
      meanings: values.meanings.split(", "),
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
              {...form.getInputProps("level")}
          />
          <TextInput
              withAsterisk
              placeholder="意味"
              {...form.getInputProps("meanings")}
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

