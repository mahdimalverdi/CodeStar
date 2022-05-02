import {Injectable} from '@angular/core';
import {InvertedData} from '../models/inverted-data';

@Injectable({
    providedIn: 'root',
})
export class FlipService {
    public static readonly ANIMATION_DURATION: number = 500;
    public static readonly ANIMATION_EASING: string = 'cubic-bezier(0.7, -0.3, 0.3, 1.3)';

    public static async flip(
        firstCallback: () => Map<HTMLElement, DOMRect>,
        lastCallback: () => Map<HTMLElement, DOMRect>,
        changeSomething: () => void,
        options: KeyframeAnimationOptions = {}
    ): Promise<void> {
        const first = firstCallback();
        changeSomething();
        const last = lastCallback();
        await this.invertAndPlay(first, last, options);
    }

    public static invert(
        first: Map<HTMLElement, DOMRect>,
        last: Map<HTMLElement, DOMRect>
    ): Map<HTMLElement, InvertedData> {
        const data = new Map<HTMLElement, InvertedData>();

        for (const element of first.keys()) {
            const firstDomRect = first.get(element)!;
            const lastDomRect = last.get(element)!;

            data.set(element, {
                x: firstDomRect.left - lastDomRect.left,
                y: firstDomRect.top - lastDomRect.top,
                scaleX: firstDomRect.width / lastDomRect.width,
                scaleY: firstDomRect.height / lastDomRect.height,
            });
        }

        return data;
    }

    public static async invertAndPlay(
        first: Map<HTMLElement, DOMRect>,
        last: Map<HTMLElement, DOMRect>,
        options: KeyframeAnimationOptions = {}
    ): Promise<void> {
        const data = this.invert(first, last);
        await this.play(data, options);
    }

    public static async play(
        invert: Map<HTMLElement, InvertedData>,
        options: KeyframeAnimationOptions = {}
    ): Promise<void> {
        const promises: Promise<void>[] = [];

        invert.forEach((data, element) => {
            const translate = element.classList.contains('background')
                ? 'translate(0)'
                : `translate(${data.x}px, ${data.y}px)`;

            const scale = element.classList.contains('background')
                ? `scale(${data.scaleX}, ${data.scaleY})`
                : 'scale(1)';

            const transform = `${translate} ${scale}`;

            const animation = element.animate([{transform}, {transform: 'translate(0) scale(1)'}], {
                duration: FlipService.ANIMATION_DURATION,
                easing: FlipService.ANIMATION_EASING,
                ...options,
            });

            promises.push(
                new Promise((resolve) => {
                    animation.addEventListener('finish', () => resolve());
                })
            );
        });

        await Promise.all(promises);
    }
}
