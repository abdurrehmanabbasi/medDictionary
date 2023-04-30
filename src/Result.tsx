import { IResult } from "./types";
interface IProps {
    term: string;
    result: IResult;
}
const Result = ({ result, term }: IProps) => {
    return (<div className="text-lg flex">
        <div className="w-1/2 flex flex-col gap-4">
            <h3 className="font-bold text-2xl">{term}</h3>
            {result.hwi.prs ?
                <div className="flex flex-col ">
                    <h2 >Pronunciation <span className="font-bold">{result.hwi.hw}</span></h2>
                    <audio controls>
                        <source src={`https://media.merriam-webster.com/audio/prons/en/us/wav/${result.hwi.prs[0].sound.audio.charAt(0)}/${result.hwi.prs[0].sound.audio}.wav`} />
                    </audio>
                </div> : ""
            }
            <div>
                <p className="font-bold">Definition</p>
                {result.shortdef[0]}
            </div>
        </div>

        <div className=" w-1/2">
            {result.art ?
                <img src={`https://www.merriam-webster.com/assets/mw/static/art/dict/${result.art.artid}.gif`} />
                : ""
            }
        </div>

    </div>);
}

export default Result;