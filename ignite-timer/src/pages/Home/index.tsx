import { HandPalm, Play } from "phosphor-react";
import { createContext, useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns';

import {
  CountdownButton,
  HomeContainer,
  StopCountdownButton,
} from "./styles";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

interface Cycle {
  id: string,
  task: string,
  minutes: number,
  startDate: Date,
  interruptedDate?: Date,
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

/* eslint-disable prettier/prettier */
export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);  // Verifica se tem ciclo/intervalo ativo

  function markCurrentCycleAsFinished() {
    setCycles((state) => state.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, finishedDate: new Date() }
      } else {
        return cycle
      }
    }),
    )
  }

  /* function handleCreateNewCycle(data: newCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),  // Pega o horário em milisegundos
      task: data.task,
      minutes: data.minutes,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset();
  } */

  function handleInterruptCycle() {
    setCycles(state => state.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() }
      } else {
        return cycle;
      }
    }),
    )
    setActiveCycleId(null)
  }

  //const totalSeconds = activeCycle? activeCycle.minutes * 60 : 0;

  //const task = watch('task');
  //const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form /*onSubmit={handleSubmit(handleCreateNewCycle)}*/>

        <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}>
          {/*<NewCycleForm />*/}
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <CountdownButton /*disabled={isSubmitDisabled}*/ type="submit">
            <Play size={24} />
            Começar
          </CountdownButton>
        )}

      </form>
    </HomeContainer>
  )
}
