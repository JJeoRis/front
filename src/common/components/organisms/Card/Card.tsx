import React from "react";
import {ICard} from "../../../modules/model/CardModel";
import {Card, CardContent, Typography} from "@material-ui/core";
import {observer} from "mobx-react";

type IProps = {
    card: ICard;
};

const WordCard = ({card}: IProps) => {
    return (
        <Card elevation={2}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {card.term}
                </Typography>
                <Typography>{card.description}</Typography>
            </CardContent>
        </Card>
    )
};

export default observer(WordCard);