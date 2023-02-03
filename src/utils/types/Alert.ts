export type Alert = {
    text: string,
    level: AlertLevel,
    duration: AlertDuration
}

export type AlertLevel = 'ok' | 'neutral' | 'warning' | 'error';
export type AlertDuration = 3000 | 5000 | 10000;
