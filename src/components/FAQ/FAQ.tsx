import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { questions } from "./data";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/solid";

function FAQ() {
  return (
    <div className="grid grid-cols-2 py-4 my-8">
      <div className="py-4 flex justify-between flex-col">
        <span className="text-5xl font-medium ">
          Frequently Asked <br /> Questions
        </span>
        <div>
          <Button className="px-10 bg-white rounded-full outline-gray-200">
            Have other question?
            <ArrowRightIcon className="text-orange-400 h-6 w-6" />
          </Button>
        </div>
      </div>
      <div>
        <Accordion>
          {questions.map((question) => (
            <AccordionItem
              className="py-4"
              indicator={<PlusIcon className="h-6 w-6 text-orange-400" />}
              aria-label={question.title}
              key={question.title}
              title={question.title}
            >
              {question.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
