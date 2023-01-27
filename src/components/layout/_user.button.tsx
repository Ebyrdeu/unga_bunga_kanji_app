import {Avatar, Group, Text, UnstyledButton} from "@mantine/core";
import {IconChevronRight} from "@tabler/icons";
import {useRouter} from "next/router";
import {type UserButtonProps} from "@type/layout";
import {useUserButtonStyles} from "@components/layout/styles/useUserButton.styles";
import {useBurgerStore} from "@utils/store";

export const UserButton = ({image, name, level, profileLink, ...others}: UserButtonProps) => {
	const {classes} = useUserButtonStyles();
	const {push} = useRouter();
	const {toggleShow} = useBurgerStore();
	return (
			<UnstyledButton onClick={() => {
				toggleShow();
				return push(profileLink);
			}} className={classes.user} {...others}>
				<Group>
					<Avatar src={image} alt={`${name} profile picture`} radius={"xs"}>{name.at(0)}</Avatar>
					<div style={{flex: 1}}>
						<Text size="sm" weight={500}>{name}</Text>
						<Text color="dimmed" size="xs">Current level : {level}</Text>
					</div>
					<IconChevronRight size={14} stroke={1.5}/>
				</Group>
			</UnstyledButton>
	);
};

