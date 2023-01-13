import useThAdminStyles from "@/components/admin/styles/useThAdminStyles";
import {IconChevronDown, IconChevronUp, IconSelector} from "@tabler/icons";
import {Center, Group, Text, UnstyledButton} from "@mantine/core";
import type {ThProps} from "@/@types";

const ThAdmin = ({label, reversed, sorted, onSort}: ThProps) => {
	const {classes} = useThAdminStyles();
	const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
	return (
			<th className={classes.th}>
				<UnstyledButton onClick={onSort} className={classes.control}>
					<Group position="apart">
						<Text weight={500} size="sm">{label}</Text>
						<Center className={classes.icon}>
							<Icon size={14} stroke={1.5}/>
						</Center>
					</Group>
				</UnstyledButton>
			</th>
	);
};

export default ThAdmin;